using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using Microsoft.EntityFrameworkCore;
using PaymentDetail.Data;
using PaymentDetail.Configuration;
using Pomelo.EntityFrameworkCore.MySql.Infrastructure;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.UI;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Identity;

namespace PaymentDetail
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(o => o.AddPolicy("MyPolicy", builder =>
            {
                builder.AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader();
            }));
            // services.Configure<JwtConfig>(Configuration.GetSection("JwtConfig"));
            services.AddDbContextPool<ApiDbContext>(
               options => options.UseMySql("Server=remotemysql.com;Port=3306;Database=dE0G9HyoEt;Uid=dE0G9HyoEt;Pwd=WQBmNLclDc;",new MySqlServerVersion(new Version(8, 0, 11))));
            services.AddMvc();

            services.AddControllers();
            var key = Encoding.ASCII.GetBytes(Configuration["JwtConfig:Secret"]);

            var tokenValidationParameters = new TokenValidationParameters
            {
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = new SymmetricSecurityKey(key),
                ValidateIssuer = false,
                ValidateAudience = false,
                ValidateLifetime = true,
                RequireExpirationTime = false,
                ClockSkew = TimeSpan.Zero
            };
            services.AddSingleton(tokenValidationParameters);
            services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(jwt =>
            {
                jwt.SaveToken = true;
                jwt.TokenValidationParameters = tokenValidationParameters;
            });
            services.AddDefaultIdentity<IdentityUser>(options => options.SignIn.RequireConfirmedAccount = true)
                        .AddEntityFrameworkStores<ApiDbContext>();
            services.AddSwaggerGen(swagger =>
            {
                swagger
                    .SwaggerDoc("v1",
                    new OpenApiInfo
                    {
                        Title = "PaymentDetail",
                        Version = "v1",
                        // Description =
                        //     "Authentication and Authorization in ASP.NET 5 with JWT and Swagger"
                    });

                // To Enable authorization using Swagger (JWT)
                // swagger
                //     .AddSecurityDefinition("Bearer",
                //     new OpenApiSecurityScheme()
                //     {
                //         Name = "Authorization",
                //         Type = SecuritySchemeType.ApiKey,
                //         Scheme = "Bearer",
                //         BearerFormat = "JWT",
                //         In = ParameterLocation.Header,
                //         Description =
                //             "Enter 'Bearer' [space] and then your valid token in the text input below.\r\n\r\nExample: \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9\""
                //     });
                // swagger
                //     .AddSecurityRequirement(new OpenApiSecurityRequirement {
                //             {
                //                 new OpenApiSecurityScheme {
                //                     Reference =
                //                         new OpenApiReference {
                //                             Type = ReferenceType.SecurityScheme,
                //                             Id = "Bearer"
                //                         }
                //                 },
                //                 new string[] { }
                //             }
                //     });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "PaymentDetail v1"));
            }

            // app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors("MyPolicy");
            // app.UseAuthentication();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
