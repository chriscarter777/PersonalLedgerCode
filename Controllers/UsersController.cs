using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text.Encodings.Web;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using pla5.Data;
using pla5.Models;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Identity;
using System.Security.Claims;
using Newtonsoft.Json;

namespace pla5.Controllers
{
  [Produces("application/json")]
  [Route("api/Users")]
  [Authorize(Policy = "Administrator")]
  public class UsersController : Controller
  {
    private readonly ILogger _logger;
    private readonly UserManager<IdentityUser> _userManager;
    private readonly SignInManager<IdentityUser> _signInManager;
    private readonly string _userName;


    public UsersController(UserManager<IdentityUser> userManager, ILogger<AccessController> logger, SignInManager<IdentityUser> signInManager)
    {
      _logger = logger;
      _signInManager = signInManager;
      _userManager = userManager;
      _userName = signInManager.Context.User.Identity.Name;
    }

    // GET: api/Users
    [HttpGet]
    public async Task<IActionResult> GetAppUsers()
    {
      try
      {
        if (!ModelState.IsValid)
        {
          return BadRequest(ModelState);
        }

        IdentityUser[] ius = _userManager.Users.ToArray();

        if (ius == null)
        {
          return NotFound();
        }

        AppUser[] appUsers = new AppUser[ius.Length];
        for (int i = 0; i < ius.Length; i++)
        {
          appUsers[i] = new AppUser();
          appUsers[i].Id = ius[i].Id;
          appUsers[i].UserName = ius[i].UserName;
          appUsers[i].Admin = await _userManager.IsInRoleAsync(ius[i], "Adminstrator");
        }
        return Ok(appUsers);
      }
      catch (Exception e)
      {
        HandleException(e, ControllerContext.RouteData.Values["action"].ToString(), "", false);
        return NotFound();
      }
    }  //GetAppUsers

    // GET: api/Users/5
    [HttpGet("{id}")]
    public async Task<IActionResult> GetAppUser([FromRoute] string id)
    {
      try
      {
        if (!ModelState.IsValid)
        {
          return BadRequest(ModelState);
        }

        IdentityUser iu = await _userManager.FindByNameAsync(id);

        if (iu == null)
        {
          return NotFound();
        }

        AppUser appUser = new AppUser();
        appUser = new AppUser();
        appUser.Id = iu.Id;
        appUser.UserName = iu.UserName;
        appUser.Admin = await _userManager.IsInRoleAsync(iu, "Adminstrator");
        return Ok(appUser);
      }
      catch (Exception e)
      {
        HandleException(e, ControllerContext.RouteData.Values["action"].ToString(), "", false);
        return NotFound();
      }
    }  //GetAppUser

    // PUT: api/Users/Admin/5
    [HttpPut("Admin/{id}")]
    public async Task<IActionResult> MakeAdminAsync([FromRoute] string id)
    {
      try
      {
        if (!ModelState.IsValid)
        {
          return BadRequest(ModelState);
        }

        IdentityUser user = await _userManager.FindByIdAsync(id);
        IdentityResult result = await _userManager.AddClaimAsync(user, new Claim(ClaimTypes.Role, "Administrator"));

        if(result == IdentityResult.Success)
        {
          return Ok();
        }
        else
        {
          return NotFound();
        }
      }
      catch (Exception e)
      {
        HandleException(e, ControllerContext.RouteData.Values["action"].ToString(), "", false);
        return NotFound();
      }
    }  //MakeAdminAsync

    // PUT: api/Users/NoAdmin/5
    [HttpPut("NoAdmin/{id}")]
    public async Task<IActionResult> UnmakeAdminAsync([FromRoute] string id)
    {
      try
      {
        if (!ModelState.IsValid)
        {
          return BadRequest(ModelState);
        }

        IdentityUser user = await _userManager.FindByIdAsync(id);
        IdentityResult result = await _userManager.RemoveClaimAsync(user, new Claim(ClaimTypes.Role, "Administrator"));

        if (result == IdentityResult.Success)
        {
          return Ok();
        }
        else
        {
          return NotFound();
        }
      }
      catch (Exception e)
      {
        HandleException(e, ControllerContext.RouteData.Values["action"].ToString(), "", false);
        return NotFound();
      }
    }  //UnmakeAdminAsync

    // PUT: api/Users/Reset/5
    [HttpPut("Reset/{id}")]
    public async Task<IActionResult> ResetPasswordAsync([FromRoute] string id, [FromHeader] string token, [FromBody] string newPassword)
    {
      try
      {
        if (!ModelState.IsValid)
        {
          return BadRequest(ModelState);
        }

        IdentityUser user = await _userManager.FindByIdAsync(id);
        IdentityResult result = await _userManager.ResetPasswordAsync(user, token, newPassword);

        if (result == IdentityResult.Success)
        {
          return Ok();
        }
        else
        {
          return NotFound();
        }
      }
      catch (Exception e)
      {
        HandleException(e, ControllerContext.RouteData.Values["action"].ToString(), "", false);
        return NotFound();
      }
    }  //ResetPasswordAsync

    // DELETE: api/Users/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteUser([FromRoute] string id)
    {
      try
      {
        if (!ModelState.IsValid)
        {
          return BadRequest(ModelState);
        }

        IdentityUser user = await _userManager.FindByNameAsync(id);
        if (user == null)
        {
          return NotFound();
        }

        await _userManager.DeleteAsync(user);

        return Ok();
      }
      catch (Exception e)
      {
        HandleException(e, ControllerContext.RouteData.Values["action"].ToString(), "", false);
        return NotFound();
      }
    }  //DeleteUser
    #region Infrastructure
    private void HandleException(Exception e, string method, string userMessage, bool redirect)
    {
      _logger.LogError("{0}: An error occurred in UsersController/{1} for user: {2}.\n{3}\n{4}", DateTime.Now, method, _userName, e.Message, userMessage);
      if (redirect)
      {
        RedirectToAction("Error");
      }
    }  //HandleException
    #endregion
  }  //controller
}  //namespace
