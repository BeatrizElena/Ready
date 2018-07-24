# command to use on terminal:
# $ EMAIL="beatriz@example.com" PASSWORD="12345" PASSWORD_CONFIRMATION="12345" sh ./curl-scripts/sign-up.sh

# change curl line to : curl "ready-interpreter.herokuapp.com//sign-up" \

curl "http://localhost:4741/sign-up" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD_CONFIRMATION}"'"
    }
  }'

echo
