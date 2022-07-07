using LoginApi.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace LoginApi.Data
{
    public class UserSeedData
    {
        public static void SeedAsync(DataContext context)
        {

            context.Users.Add(new User
            {
                Id = 1,
                UserName = "Admin",
                Email="admin@admin.com",
                Password = "1234"
            });
            context.SaveChanges();
        }

    }
}
