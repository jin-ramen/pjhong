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
