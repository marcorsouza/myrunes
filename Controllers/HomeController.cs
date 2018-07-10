using Microsoft.AspNetCore.Mvc;

namespace Myrunes{
    public class HomeController:Controller
    {
        public ActionResult Index(){
            return View();
        }
    }
}