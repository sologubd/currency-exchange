FROM python:3.12-bullseye

RUN mkdir app
WORKDIR /app

COPY requirements.txt .
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

COPY . .

EXPOSE 8080

CMD ["uvicorn", "src.main:app", "--reload", "--host", "0.0.0.0", "--port", "8080"]