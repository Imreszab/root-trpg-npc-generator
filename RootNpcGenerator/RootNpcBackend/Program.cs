using RootNpcBackend.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Http.Extensions;
using RootNpcBackend.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


builder.Services.AddDbContext<RootContext>(options =>
{
    var connectionstring = builder.Configuration.GetConnectionString("RootContext") ?? throw new InvalidOperationException("Connetion string error");
    options.UseSqlServer(connectionstring);
});
builder.Services.AddTransient<RootNpcSeed>();

var app = builder.Build();

using var scope = app.Services.CreateScope();
var services = scope.ServiceProvider;
var initialiser = services.GetRequiredService<RootNpcSeed>();
//initialiser.Seed();    only run when no data in Db
ApiHelperService.InitializeClient();



// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(builder => builder
   .AllowAnyHeader()
   .AllowAnyMethod()
   .SetIsOriginAllowed((host) => true)
   .AllowCredentials());

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
