from litestar import Litestar, get


@get("/healthcheck")
async def check_status() -> dict[str, str]:
    return {"status": "alive"}


app = Litestar([check_status])
