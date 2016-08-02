FROM java:8-jre-alpine

RUN apk update &&\
	apk --no-cache add bash &&\
	apk --no-cache add libstdc++

COPY . /opt/docs-gradle
WORKDIR /opt/docs-gradle 
VOLUME [src]

EXPOSE 8080
CMD ["./gradlew", "server"]
