#!/bin/bash

# http://redsymbol.net/articles/unofficial-bash-strict-mode/
set -uo pipefail

main() {
    (
        rm -rf node_modules
        npm i -D mocha@3.5.3 mochawesome@^1.5.5 chai
        mocha --recursive section-* --reporter mochawesome
        if hash xdg-open 2>/dev/null; then
            xdg-open ./mochawesome-reports/mochawesome.html
        else
            open ./mochawesome-reports/mochawesome.html
        fi
    )
}

main
