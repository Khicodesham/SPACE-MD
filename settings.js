require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VV0ZKiOBT9l7xqjSgIYlVXLSAIooiCoG7NQ4QAQQg0BFCn/Pctuqd75mF3qvctJKlzzz3n3PADkALXyER3MP8Bygq3kKJ+Se8lAnMgN1GEKjAEIaQQzMHrJiee39hXzmI6W1PWLiOMZ7wezKhqtUtSQLy31OZ604IX8ByCsrlkOPgDoCw9TmnjFuJiv/fgbnLZtTF3PRoT0+kWTeraJqapISwzn3kBzx4R4gqTWC0TlKMKZia62xBXX6Mfa7JwunDeyFjakVloZ8+xbMxIjQEz6F63a3GhLk75OmUOX6Mfbn3NyGZ5p8v+qH31Qtaw2ea4MMezVXxTLzQSJbM1CH8/vNOvcUxQaISIUEzvX9YdW4OBk2CtiN3jKOFQzYyCmbOwFjlv8f5Gvmhum3vhSGeNrxE33Id8FqaLjTVpA40xjslOd8TVgXs19inHZIF3W4Zcejrrxe/E7eojK9f/o/vAPNxW7Xq013TW8MO4M64i5RlFFa7LghVzwR97rn1E6lH6Gn3CaYr2aK/HIz8Zq0atH/iAGft85JwLdU+SyTHm152RwI/Y9PQhbao/scwGS2LTrUBYc2LydOSevIe3Ok5PxfJQXtvpYSLL67Pgx9tT7qXL8Dg1RbwbJLLVarubrDUXrbSwh2/2Eq5fi/0q8DcL6eWtoyu6GyGYj59DUKEY17SCFBfkbY+dDAEMWwcFFaJv8oIxTLOFyh6tbVeyjq9cVEYUm9pIV4yiX5vt6b486ANkRUHwAoagrIoA1TUKdVzTorpvUF3DGNVg/vf3ISDoRt+N68ux4yGIcFXTA2nKrIDhh6sfhzAIioZQ504CpV+gCsyZX9uIUkziutexIbAKEtwiJYG0BvMIZjX67BBVKARzWjXoc2qVIuyF30nm2ZmuRDAE+ZshOARzMGE5keHGM54VhfGcE/+qv3U9LizLbwRRMATZ+70Jxwosz3A8L0xZsb/ZHzw/KfaIIaIQZzWYA8VsmXGxUdRVcycbZrmUdrGkxBL41dJHNt61l3NNNtrcfGyCgR8wbnNs8UhO2TCe2Usm82sJSYKzn7VS9/IvIP1wBWbq3WczXj2v1T0T4Mc9RYeHVnbxWdBd7jC6RQOU8HuuTWQXEn8Rn7rZJmY2u3uiRGxeEQp5aVqsbpzjJCItBUHugzQEIWpxgH4vZgqDXLJfJf/cra3tWWWmld2Qaq8W6QYb2wvbbhaaMPYGB98cq69rrHuMeMsW3m4vaa2GERH25y5z/Vm7TdftxuKK7iO1b1OT/Xyt8FueerP6zwijt+EnsLfwC+a9M+9DxjyHv4H8fE/+6/+wOyc7Zz3F9UO3M2KpQiZwbXcS2ZO9uNGVV0l6vGWu0brbgOfz+xCUGaRRUeVgDiAJqwKHYAiqoulTa5Co+EMxRYoNeRcrfesZrKn0axJcnKOawrwE87EgTKbTGT/h3m/ZVVHqsE56FZaclDfg+Q8RtHWyVwcAAA==',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '2349041863971',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 3000,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'khicodesham',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12342605,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || 'xxxxxx',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || '25-12-2026'
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
