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
using Newtonsoft.Json;
using System.IO;

namespace pla5.Controllers
{
  [Produces("application/json")]
  [Route("api/Accounts")]
  public class AccountsController : Controller
  {
    private readonly ILogger _logger;
    private readonly IDataRepository _repo;
    private readonly string _userName;

    public AccountsController(ILogger<AccountsController> logger, IDataRepository repo, SignInManager<IdentityUser> signInManager)
    {
      _logger = logger;
      _repo = repo;
      _userName = signInManager.Context.User.Identity.Name;
    }

    // GET: api/Accounts
    [HttpGet]
    public async Task<IActionResult> GetAccounts()
    {
      try
      {
        if (!ModelState.IsValid)
        {
          return BadRequest(ModelState);
        }

        IEnumerable<Account> account = await _repo.GetAccountsAsync();

        if (account == null)
        {
          return NotFound();
        }
        else
        {
          return Ok(account);
        }
      }
      catch (Exception e)
      {
        HandleException(e, ControllerContext.RouteData.Values["action"].ToString(), "", false);
        return NotFound();
      }
    } //GetAccounts

    // GET: api/Accounts/5
    [HttpGet("{id}")]
    public async Task<IActionResult> GetAccount([FromRoute] int id)
    {
      try
      {
        if (!ModelState.IsValid)
        {
          return BadRequest(ModelState);
        }

        Account account = await _repo.GetAccountAsync(id);

        if (account == null)
        {
          return NotFound();
        }
        else
        {
          return Ok(account);
        }
      }
      catch (Exception e)
      {
        HandleException(e, ControllerContext.RouteData.Values["action"].ToString(), "", false);
        return NotFound();
      }
    } //GetAccount

    // PUT: api/Accounts/5
    [HttpPut]
    public async Task<IActionResult> PutAccount([FromBody] Account account)
    {
      try
      {
        if (!ModelState.IsValid)
        {
          return BadRequest(ModelState);
        }

        Account response = await _repo.UpdateAccountAsync(account);

        if (response == null)
        {
          return NotFound();
        }
        else
        {
          return Ok(response);
        }
      }
      catch (Exception e)
      {
        HandleException(e, ControllerContext.RouteData.Values["action"].ToString(), "", false);
        return NotFound();
      }
    } //PutAccount

    // POST: api/Accounts
    [HttpPost]
    public async Task<IActionResult> PostAccount([FromBody] Account account)
    {
      try
      {
        account.User = _userName;
        if (!ModelState.IsValid)
        {
          return BadRequest(ModelState);
        }

        Account response = await _repo.AddAccountAsync(account);

        if (response == null)
        {
          return NotFound();
        }
        else
        {
          return Ok(response);

        }
      }
      catch (Exception e)
      {
        HandleException(e, ControllerContext.RouteData.Values["action"].ToString(), "", false);
        return NotFound();
      }
    } //PostAccount

    // DELETE: api/Accounts/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteAccount([FromRoute] int id)
    {
      try
      {
        if (!ModelState.IsValid)
        {
          return BadRequest(ModelState);
        }

        Account response = await _repo.DeleteAccountAsync(id);

        if (response == null)
        {
          return NotFound();
        }
        else
        {
          return Ok(response);
        }
      }
      catch (Exception e)
      {
        HandleException(e, ControllerContext.RouteData.Values["action"].ToString(), "", false);
        return NotFound();
      }
    } //DeleteAccount

    #region Infrastructure
    private void HandleException(Exception e, string method, string userMessage, bool redirect)
    {
      _logger.LogError("{0}: An error occurred in AccountsController/{1} for user: {2}.\n{3}\n{4}", DateTime.Now, method, _userName, e.Message, userMessage);
      if (redirect)
      {
        RedirectToAction("Error");
      }
    }  //HandleException
    #endregion
  }  //controller
}  //namespace
