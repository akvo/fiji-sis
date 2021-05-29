#!/usr/bin/env bash

set -eu

docker run \
       --rm \
       --volume "$(pwd):/home/tcakvo/public_html/fiji-sis" \
       --workdir "/home/tcakvo/public_html/fiji-sis" \
       --entrypoint /bin/sh \
       node:14-alpine -c 'yarn install && yarn build'
