using Microsoft.AspNetCore.Mvc;
using Google.Authenticator;

namespace servers.Controllers.User {
    [Route("api/user")]
    public class SessionController : Controller {
        [HttpPost("login")]
        public void Login() {

        }
    }
}