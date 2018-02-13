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

namespace pla5.Controllers
{
  [Produces("application/json")]
  [Route("api/Categories")]
  public class CategoriesController : Controller
  {
    private readonly ILogger _logger;
    private readonly IDataRepository _repo;
    private readonly string _userName;

    public CategoriesController(ILogger<CategoriesController> logger, IDataRepository repo, SignInManager<IdentityUser> signInManager)
    {
      _logger = logger;
      _repo = repo;
      _userName = signInManager.Context.User.Identity.Name;
    }

    // GET: api/Categories
    [HttpGet]
    public async Task<IActionResult> GetCategories()
    {
      try
      {
        if (!ModelState.IsValid)
        {
          return BadRequest(ModelState);
        }

        IEnumerable<Category> categories = await _repo.GetCategoriesAsync();

        if (categories == null)
        {
          return NotFound();
        }
        else
        {
          return Ok(categories);
        }
      }
      catch (Exception e)
      {
        HandleException(e, ControllerContext.RouteData.Values["action"].ToString(), "", false);
        return NotFound();
      }
    }  //GetCategories

    // GET: api/Categories/5
    [HttpGet("{id}")]
    public async Task<IActionResult> GetCategory([FromRoute] int id)
    {
      try
      {
        if (!ModelState.IsValid)
        {
          return BadRequest(ModelState);
        }

        Category category = await _repo.GetCategoryAsync(id);

        if (category == null)
        {
          return NotFound();
        }
        else
        {
          return Ok(category);
        }
      }
      catch (Exception e)
      {
        HandleException(e, ControllerContext.RouteData.Values["action"].ToString(), "", false);
        return NotFound();
      }
    }  //GetCategory

    // PUT: api/Categories/5
    [HttpPut]
    public async Task<IActionResult> PutCategory([FromBody] Category category)
    {
      try
      {
        if (!ModelState.IsValid)
        {
          return BadRequest(ModelState);
        }

        Category response = await _repo.UpdateCategoryAsync(category);

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
    }  //PutCategory

    // POST: api/Categories
    [HttpPost]
    public async Task<IActionResult> PostCategory([FromBody] Category category)
    {
      try
      {
        category.User = _userName;
        if (!ModelState.IsValid)
        {
          return BadRequest(ModelState);
        }

        Category response = await _repo.AddCategoryAsync(category);

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
    }  //PostCategory

    // DELETE: api/Categories/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteCategory([FromRoute] int id)
    {
      try
      {
        Category response = await _repo.DeleteCategoryAsync(id);

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
    }  //DeleteCategory
    #region Infrastructure
    private void HandleException(Exception e, string method, string userMessage, bool redirect)
    {
      _logger.LogError("{0}: An error occurred in CategoriesController/{1} for user: {2}.\n{3}\n{4}", DateTime.Now, method, _userName, e.Message, userMessage);
      if (redirect)
      {
        RedirectToAction("Error");
      }
    }  //HandleException
    #endregion
  }  //controller
}  //namespace
