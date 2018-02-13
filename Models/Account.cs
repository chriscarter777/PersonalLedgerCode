using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace pla5.Models
{
    public class Account
    {
        public int? ID { get; set; }
        public decimal Balance { get; set; }
        public string AcctType { get; set; }
        public int? DefaultAcct { get; set; }
        public decimal? DefaultAmt { get; set; }
        public int? DefaultCat { get; set; }
        public string Institution { get; set; }
        public decimal Interest { get; set; }
        public decimal? Limit { get; set; }
        public string Name { get; set; }
        public string Number { get; set; }
        public bool Owned { get; set; }
        public string User { get; set; }
    }  //class
}  //namespace
