include config.mk

HOMEDIR = $(shell pwd)

pushall: sync
	git push origin master
	npm publish

run:
	python -m SimpleHTTPServer

prettier:
	prettier --single-quote --write "**/*.js"

sync:
	scp index.html $(USER)@$(SERVER):$(APPDIR)
	scp simplescroll.js $(USER)@$(SERVER):$(APPDIR)

