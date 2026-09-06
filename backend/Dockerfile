FROM rust:1-slim AS build
WORKDIR /app
COPY Cargo.toml Cargo.lock ./
COPY src ./src
RUN cargo build --release --jobs 1

FROM debian:bookworm-slim
WORKDIR /app
COPY --from=build /app/target/release/backend .
EXPOSE 3000
CMD ["./backend"]