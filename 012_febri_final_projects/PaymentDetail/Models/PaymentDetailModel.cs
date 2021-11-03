using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
namespace PaymentDetail.Models
{
    public class PaymentDetailModel
    {
        [Required]
        [Key]
        public int paymentDetailId {get; set;}
        public string cardOwnerName {get; set;}
        public string cardNumber {get; set;}
        public string expirationDate {get;set;}
        public string securityCode{get; set;}
        
    }
}