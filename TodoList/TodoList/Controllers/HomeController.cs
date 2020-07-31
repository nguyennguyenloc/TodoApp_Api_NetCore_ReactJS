using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using TodoList.Data;
using TodoList.Models;

namespace TodoList.Controllers {
    [Route ("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase {

        private AppDbContext _context;

        public HomeController (AppDbContext context) {
            _context = context;
        }

        public IActionResult Get () {
            var data = _context.TodoItems.ToList ();
            return new JsonResult (data);
        }

        [HttpGet ("{id}")]
        public IActionResult Get (int id) {
            var data = _context.TodoItems.Find (id);
            return new JsonResult (data);
        }

        [HttpPost]
        public IActionResult Create (TodoItem body) {
            if (!ModelState.IsValid) {
                return BadRequest ();
            }

            _context.TodoItems.Add (body);
            _context.SaveChanges ();

            return new JsonResult (body);
        }

        [HttpPut ("{id}")]
        public IActionResult Update (int id, TodoItem body) {
            var check = _context.TodoItems.Any (item => item.Id == id);
            if (!check) {
                return BadRequest ();
            }
            _context.TodoItems.Update (body);
            _context.SaveChanges ();

            return new JsonResult (body);
        }

        [HttpDelete ("{id}")]
        public IActionResult Delete (int id) {
            var check = _context.TodoItems.FirstOrDefault (item => item.Id == id);
            if (check == null) {
                return BadRequest ();
            }
            _context.TodoItems.Remove (check);
            _context.SaveChanges ();
            return new JsonResult (check);
        }
    }
}