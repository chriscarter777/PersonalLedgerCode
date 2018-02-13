using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using pla5.Data;

namespace pla5
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
      //Data Access
      services.AddDbContext<LedgerDbContext>(
          options => options.UseSqlServer(Configuration.GetConnectionString("LedgerDatabase"),
          optionsBuilders => optionsBuilders.MigrationsAssembly("pla5")));

      //Identity
      services.AddIdentity<IdentityUser, IdentityRole>()
          .AddEntityFrameworkStores<LedgerDbContext>()
          .AddDefaultTokenProviders();

      //services.Configure<IdentityOptions>(options =>
      //{
      //    options.Password.RequireDigit = true;
      //    options.Password.RequiredLength = 8;
      //    options.Password.RequireNonAlphanumeric = false;
      //    options.Password.RequireUppercase = true;
      //    options.Password.RequireLowercase = false;
      //    options.Password.RequiredUniqueChars = 6;
      //    options.User.RequireUniqueEmail = true;
      //});

      //services.ConfigureApplicationCookie(options =>
      //{
      //    options.LoginPath = "/Account/Login"; // If the LoginPath is not set here, ASP.NET Core will default to /Account/Login
      //    options.LogoutPath = "/Account/Logout"; // If the LogoutPath is not set here, ASP.NET Core will default to /Account/Logout
      //    options.AccessDeniedPath = "/Account/AccessDenied"; // If the AccessDeniedPath is not set here, ASP.NET Core will default to /Account/AccessDenied
      //});

      //Other Framework Services
      services.AddMvc();

      //Application Services
      services.AddTransient<IDataRepository, LedgerDbRepository>();


      //Policy-Based Authorization
      services.AddAuthorization(options =>
      {
        options.AddPolicy("Administrator", policy => policy.RequireClaim(ClaimTypes.Role, "Administrator"));
      });
    }

    public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseStaticFiles();
            app.UseAuthentication();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");

                routes.MapSpaFallbackRoute(
                    name: "spa-fallback",
                    defaults: new { controller = "Home", action = "Main" });
            });
        }
    }
}
