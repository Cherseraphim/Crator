FROM cypress/included:10.4.0
WORKDIR /tribeFramework
COPY . .
CMD ["npm" "run cypress:open"]

