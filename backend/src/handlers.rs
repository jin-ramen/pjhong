use axum::{Json, extract::{Path, Query}};
use strum::VariantArray;

use crate::insults::{Insult, Target, Message};

pub async fn get_insult(
    Path(insult): Path<Insult>,
    Query(target): Query<Target>,
) -> Json<Message> {
    let message: Message = insult.get_insult(&target);
    return Json(message);
}

pub async fn get_insults() -> Json<&'static [Insult]> {
    Json(Insult::VARIANTS)
}