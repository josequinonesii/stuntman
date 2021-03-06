﻿using Owin;
using RimDev.Stuntman.Core;

namespace RimDev.Stuntman.UsageSampleMvc
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            var options = new StuntmanOptions()
                .AddUser(new StuntmanUser("user-1", "User 1")
                    .AddClaim("given_name", "John")
                    .AddClaim("family_name", "Doe"));

            if (System.Web.HttpContext.Current.IsDebuggingEnabled)
            {
                app.UseStuntman(options);
            }
        }
    }
}
