#!/bin/bash
curl -X POST -d '{ "username": "jeff", "password": "passwords" }' "http://localhost:8080/api/login" -H "Content-Type: application/json" | python -mjson.tool
