use axum::Router;
use axum::routing::get;

use crate::handlers;

pub fn app() -> Router {
    Router::new().nest("/api", api_routes())
}

fn api_routes() -> Router {
    Router::new()
        .route("/insult/{insult}", get(handlers::get_insult))
        .route("/insults", get(handlers::get_insults))
        .route("/insult/random", get(handlers::get_random_insult))
}
