using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace pla5.Models
{
    public class Transaction
    {
        public int? ID { get; set; }
        public decimal Amount { get; set; }
        public int Category { get; set; }
        public int CrAcct { get; set; }
        public DateTime Date { get; set; }
        public int DrAcct { get; set; }
        public bool Tax { get; set; }
        public string User { get; set; }
    }  //class
}  //namespace
