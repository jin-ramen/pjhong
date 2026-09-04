use serde::Serialize;

// lets Serde turns this into Json
#[derive(Debug, Serialize)]
pub struct Message {
    pub message: String,
    pub subtitle: String,
}

impl Message {
    pub fn build(message: impl Into<String>, from: &str) -> Self {
        Self {
            message: message.into(),
            subtitle: format!("- {from}"),
        }
    }
}
