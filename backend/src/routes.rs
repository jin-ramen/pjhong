use axum::Router;
use axum::routing::get;

use crate::handlers;

pub fn app() -> Router {
    Router::new().nest("/api", api_routes())
}

fn api_routes() -> Router {
    Router::new()
        .route("/off/{name}/{from}", get(handlers::off))
        .route("/back/{name}/{from}", get(handlers::back))
}
