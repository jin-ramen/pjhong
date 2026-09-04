use axum::Router;
use axum::routing::get;

use crate::handlers;

pub fn app() -> Router {
    Router::new().route("/off/{name}/{from}", get(handlers::off))
}
