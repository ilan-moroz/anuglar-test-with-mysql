// CONFIG FOR DATABASE
class Config {
  public WebPort = 8080;
  public mySQLhost = "localhost";
  public mySQLuser = "root";
  public mySQLpass = "12345678";
  public mySQLdatabase = "bank_accounts";
}

const config = new Config();
export default config;
