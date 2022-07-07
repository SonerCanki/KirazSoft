using LoginApi.Data;
using LoginApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace LoginApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LoginController : ControllerBase
    {
        private readonly DataContext _dataContext;

        public LoginController(DataContext dataContext)
        {
            _dataContext = dataContext;
        }
       
        [HttpPost]
        public async Task<ActionResult> Login([FromBody]User request)
        {
            if (ModelState.IsValid)
            {
                var result = await _dataContext.Users.FirstOrDefaultAsync(x =>( x.UserName == request.UserName || x.Email==request.Email ) && x.Password == request.Password);
                if (result != null)
                {
                    return Ok("Succes");
                }
            }
            return Unauthorized("Error");
        }
    }
}