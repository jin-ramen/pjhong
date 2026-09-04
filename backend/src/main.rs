use backend::app;

#[tokio::main]
async fn main() {
    let listener = tokio::net::TcpListener::bind("0.0.0.0:8000")
        .await
        .expect("port 3000 already in use");

    println!("listening on http://{}", listener.local_addr().unwrap());

    axum::serve(listener, app()).await.expect("server crashed");
}
