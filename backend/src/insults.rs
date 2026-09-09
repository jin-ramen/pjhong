use serde::{Deserialize, Serialize};
use strum_macros::VariantArray;

#[derive(Serialize)]
pub struct Message {
    pub message: String,
    pub subtitle: String,
}

#[derive(Deserialize)]
pub struct Target {
    pub name: String,
    pub from: String,
}

#[derive(VariantArray, Serialize, Deserialize)]
#[serde(rename_all = "lowercase")]
pub enum Insult {
    Classic,
    BackOff,
    HappyBirthday,
    Blackadder,
    BravoMike,
    BendyBus,
    Chainsaw,
    Cocksplat,
    CornBread,
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
            },
            Insult::BravoMike => Message {
                message: format!("Bravo mike, {}", target.name),
                subtitle: format!("- {}", target.from),
            },
            Insult::BendyBus => Message {
                message: format!("Christ on a bendy-bus, {}, don't be such a fucking faff-arse.", target.name),
                subtitle: format!("- {}", target.from),
            },
            Insult::Chainsaw => Message {
                message: format!("Fuck me gently with a chainsaw, {}. Do I look like Mother Teresa?", target.name),
                subtitle: format!("- {}", target.from),
            },
            Insult::Cocksplat => Message {
                message: format!("Fuck off {}, you worthless cocksplat.", target.name),
                subtitle: format!("- {}", target.from),
            },
            Insult::CornBread => Message {
                message: format!("What in the cornbread fuck, {}", target.name),
                subtitle: format!("- {}", target.from),
            },
        }
    }
}