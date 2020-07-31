using System;
using System.ComponentModel.DataAnnotations;

namespace TodoList.Models {
    public class TodoItem {
        // public TodoItem () { }
        // public TodoItem (int id, string tit) {
        //     Id = id;
        //     title = tit;
        // }

        [Key]

        public int Id { get; set; }
        public string title { get; set; }
        public bool status { get; set; }
    }
}