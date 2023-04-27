
FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["/RootNpcBackend.csproj", "RootNpcBackend/"]
WORKDIR /src/RootNpcBackend
RUN dotnet restore "RootNpcBackend.csproj"
COPY . .
RUN dotnet publish "RootNpcBackend.csproj" -c Release -o /app/publish


FROM mcr.microsoft.com/dotnet/aspnet:6.0 
WORKDIR /app
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "RootNpcBackend.dll"]