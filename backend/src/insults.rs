use std::str::FromStr;
use serde::Serialize;
use strum_macros::VariantArray;

#[derive(Serialize)]
pub struct Message {
    pub message: String,
    pub subtitle: String,
}

pub struct Target {
    pub name: String,
    pub from: String,
}

#[derive(VariantArray, Serialize)]
pub enum Insult {
    Classic,
    BackOff,
    HappyBirthday,
    Blackadder,
}

#[derive(Debug)]
pub struct ParseInsultError;

impl FromStr for Insult {
    type Err = ParseInsultError;

    fn from_str(s: &str) -> Result<Self, Self::Err> {
        match s.to_lowercase().as_str() {
            "classic" => Ok(Insult::Classic),
            "backoff" => Ok(Insult::BackOff),
            "happybirthday" => Ok(Insult::HappyBirthday),
            "Blackadder" => Ok(Insult::Blackadder),
            _ => Err(ParseInsultError),
        }
    }
}

impl Insult {
    pub fn get_insult(&self, target: &Target) -> Message {
        match self {
            Insult::Classic => Message{
                message: format!("Fuck off, {}", target.name),
                subtitle: format!("- {}", target.from),
            },
            Insult::BackOff => Message{
                message: format!("Back the fuck off, {}", target.name),
                subtitle: format!("- {}", target.from),
            },
            Insult::HappyBirthday => Message{
                message: format!("Happy Fucking Birthday, {}", target.name),
                subtitle: format!("- {}", target.from),
            },
            Insult::Blackadder => Message{
                message: format!("{}, your head is as empty as a eunuch's underpants. Fuck off!", target.name),
                subtitle: format!("- {}", target.from),
            }
        }
    }
}