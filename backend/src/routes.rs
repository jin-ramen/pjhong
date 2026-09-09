use axum::Router;
use axum::routing::get;

use crate::handlers;

pub fn app() -> Router {
    Router::new().nest("/api", api_routes())
}

fn api_routes() -> Router {
    Router::new()
        .route("/insults/{insult}/{name}/{from}", get(handlers::get_insult))
        .route("/insults", get(handlers::get_insults))
}
