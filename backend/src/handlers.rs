use axum::{extract::Path, Json};
use strum::VariantArray;

use crate::insults::{Insult, Target, Message};

pub async fn get_insult(
    Path((insult, name, from)): Path<(String, String, String)>
) -> Json<Message> {
    let insult: Insult = insult.parse().unwrap();
    let target: Target = Target { name, from };
    let message: Message = insult.get_insult(&target);
    return Json(message);
}

pub async fn get_insults() -> Json<&'static [Insult]> {
    Json(Insult::VARIANTS)
}