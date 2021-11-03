using Microsoft.EntityFrameworkCore;
using PaymentDetail.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.UI;
namespace PaymentDetail.Data
{
    public class ApiDbContext : IdentityDbContext
    {
        public virtual DbSet<PaymentDetailModel> tb_payment_detail {get;set;}
        public virtual DbSet<RefreshToken> RefreshTokens {get;set;}
        public ApiDbContext(DbContextOptions<ApiDbContext> options) 
            : base(options)
        {

        }
        
    }
}