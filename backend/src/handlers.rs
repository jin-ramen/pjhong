use axum::Json;
use axum::extract::Path;
use serde::Deserialize;

use crate::models::Message;

#[derive(Deserialize)]
pub struct Target {
    name: String,
    from: String,
}

pub async fn off(Path(Target { name, from }): Path<Target>) -> Json<Message> {
    Json(Message::build(format!("Fuck off, {name}"), &from))
}

pub async fn back(Path(Target { name, from }): Path<Target>) -> Json<Message> {
    Json(Message::build(format!("{name}, back the fuck off"), &from))
}
