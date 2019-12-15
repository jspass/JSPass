const chalk = require("chalk");
const winston = require("winston");

function prompt(question,callback){ //prompt for things
    var stdin=process.stdin,stdout=process.stdout;
    stdin.resume();stdout.write(question);
    stdin.once('data',function(data){callback(data.toString().trim());});
}

function error(msg){logger.log('info', chalk.red.bold('error')+chalk.red(': ')+msg);process.exit();}
function warn(msg){logger.log('info', chalk.yellowBright.bold('warning')+chalk.yellowBright(': ')+msg);}

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'log '}),
  ],
  format: winston.format.printf(log => log.message)
});

logger.log('info', chalk.greenBright("   ___  _____ ______"));
logger.log('info', chalk.greenBright("  |_  |/  ___|| ___ \\"));
logger.log('info', chalk.greenBright("    | |\\ `--. | |_/ /__ _  ___  ___ "));
logger.log('info', chalk.greenBright("    | | `--. \\|  __// _` |/ __|/ __|"));
logger.log('info', chalk.greenBright("/\\__/ //\\__/ /| |  | (_| |\\__ \\\\__ \\"));
logger.log('info', chalk.greenBright("\\____/ \\____/ \\_|   \\__,_||___/|___/"));
logger.log('info', '');
logger.log('info', chalk.greenBright("The fast, open-source and secure password generator."));

function generatorService() {
  var possibleChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890~!@#$%^&*()_+".split('');
  var passwords=0, chars=16;

  prompt('How many characters do you want your password(s) to have? (max 1000)\n>', function(charsData){
    chars = charsData

    if(!isNaN(chars)){
      if(chars>0 && chars<1001){
        if(chars<7){warn('May god have mercy on your email account.');} // totally not a PAP reference ;)
        if(chars>100){warn("You're 100% gonna need a password manager for this.");}

        prompt('How many passwords do you want to generate? (max 100)\n>', function(passwordsData){
          passwords = passwordsData

          if(!isNaN(passwords)){
            if(passwords>0 && passwords<101){
              for(var p = 0; p < passwords; p++){
                var pass='';

                for(var c = 0; c < chars; c++){
                  pass += possibleChars[Math.floor(Math.random()*possibleChars.length)];
                }

                if(p==passwords-1||passwords==1){
                  logger.log('info', chalk.bold(pass));
                } else {
                  logger.log('info', chalk.bold(pass)+'\n');
                }
              }

              process.exit();
            } else {
              if(passwordsData<1){
                error("Ok, I won't generate any passwords.");
              } else if(passwordsData>100){
                error("PASSWORD OVERLOAD!!!");
              }
            }
          } else { error("That's not a number, do you even know your 123's?"); }
        });
      } else {
        if(charsData<1){
          error("Wait, where are my passwords?");
        } else if(charsData>100){
          error("OMG SO MANY CHARACTERS!!!");
        }
      }
    } else { error("That's not a number, do you even know your 123's?"); }
  });
}

generatorService();
