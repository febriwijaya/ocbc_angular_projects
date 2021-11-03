using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PaymentDetail.Data;
using PaymentDetail.Models;

namespace PaymentDetail.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    // [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class PaymentDetailController: ControllerBase
    {
        private readonly ApiDbContext _context;

        public PaymentDetailController(ApiDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetItems()
        {
            var items = await _context.tb_payment_detail.ToListAsync();
            return Ok(items);
        }

        [HttpPost]
        public async Task<IActionResult> CreateItem(PaymentDetailModel data)
        {
            if(ModelState.IsValid)
            {
                await _context.tb_payment_detail.AddAsync(data);
                await _context.SaveChangesAsync();
                // var item = await _context.tb_payment_details.FirstOrDefaultAsync(x => x.paymentDetailpaymentDetailId == id);
                return CreatedAtAction(nameof(GetItems), new { id= data.paymentDetailId }, data);

                // return CreatedAtAction("GetItem",new {data.paymentDetailId}, data);
            }
            
            return new JsonResult("Something went wrong"){StatusCode=500};
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetItem(int id)
        {
            var item = await _context.tb_payment_detail.FirstOrDefaultAsync(x => x.paymentDetailId == id);
            
            if(item == null)
                return NotFound();

            return Ok(item);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateItem(int id, PaymentDetailModel item)
        {
            if(id!= item.paymentDetailId)
                return BadRequest();
            
            var existItem = await _context.tb_payment_detail.FirstOrDefaultAsync( x => x.paymentDetailId == id);

            if(existItem == null)
                return NotFound();
            
            existItem.cardOwnerName = item.cardOwnerName;
            existItem.cardNumber = item.cardNumber;
            existItem.expirationDate = item.expirationDate;
            existItem.securityCode = item.securityCode;

            //Implement the changes on the db level
            await _context.SaveChangesAsync();

            return Ok("Perubahan Data Berhasil! Silahkan jalankan GET kembali.");
            
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteItem(int id)
        {
            var existItem = await _context.tb_payment_detail.FirstOrDefaultAsync(x => x.paymentDetailId ==id);

            if(existItem == null)
                return NotFound();
            _context.tb_payment_detail.Remove(existItem);
            await _context.SaveChangesAsync();
            
            return Ok("Data Berhasil Dihapus! Silahkan jalankan GET kembali.");
        }

    }
}