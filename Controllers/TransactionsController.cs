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
  [Route("api/Transactions")]
  public class TransactionsController : Controller
  {
    private readonly ILogger _logger;
    private readonly IDataRepository _repo;
    private readonly string _userName;

    public TransactionsController(ILogger<TransactionsController> logger, IDataRepository repo, SignInManager<IdentityUser> signInManager)
    {
      _logger = logger;
      _repo = repo;
      _userName = signInManager.Context.User.Identity.Name;
    }

    // GET: api/Transactions
    [HttpGet]
    public async Task<IActionResult> GetTransactions()
    {
      try
      {
        if (!ModelState.IsValid)
        {
          return BadRequest(ModelState);
        }

        IEnumerable<Transaction> transactions = await _repo.GetTransactionsAsync();

        if (transactions == null)
        {
          return NotFound();
        }
        else
        {
          return Ok(transactions);
        }
      }
      catch (Exception e)
      {
        HandleException(e, ControllerContext.RouteData.Values["action"].ToString(), "", false);
        return NotFound();
      }
    }  //GetTransactions

    // GET: api/Transactions/5
    [HttpGet("{id}")]
    public async Task<IActionResult> GetTransaction([FromRoute] int id)
    {
      try
      {
        if (!ModelState.IsValid)
        {
          return BadRequest(ModelState);
        }

        Transaction transaction = await _repo.GetTransactionAsync(id);

        if (transaction == null)
        {
          return NotFound();
        }
        else
        {
          return Ok(transaction);
        }
      }
      catch (Exception e)
      {
        HandleException(e, ControllerContext.RouteData.Values["action"].ToString(), "", false);
        return NotFound();
      }
    }  //GetTransaction

    // PUT: api/Transactions/5
    [HttpPut]
    public async Task<IActionResult> PutTransaction([FromBody] Transaction transaction)
    {
      try
      {
        if (!ModelState.IsValid)
        {
          return BadRequest(ModelState);
        }

        Transaction response = await _repo.UpdateTransactionAsync(transaction);

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
    }  //PutTransaction

    // POST: api/Transactions
    [HttpPost]
    public async Task<IActionResult> PostTransaction([FromBody] Transaction transaction)
    {
      try
      {
        transaction.User = _userName;
        if (!ModelState.IsValid)
        {
          return BadRequest(ModelState);
        }

        Transaction response = await _repo.AddTransactionAsync(transaction);

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
    }  //PostTransaction

    // DELETE: api/Transactions/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteTransaction([FromRoute] int id)
    {
      try
      {
        Transaction response = await _repo.DeleteTransactionAsync(id);

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
    }  //DeleteTransaction
    #region Infrastructure
    private void HandleException(Exception e, string method, string userMessage, bool redirect)
    {
      _logger.LogError("{0}: An error occurred in TransactionsController/{1} for user: {2}.\n{3}\n{4}", DateTime.Now, method, _userName, e.Message, userMessage);
      if (redirect)
      {
        RedirectToAction("Error");
      }
    }  //HandleException
    #endregion
  }  //controller
}  //namespace
