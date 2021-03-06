#!/usr/bin/env bash
#shellcheck disable=SC2039

set -eux

# Change owner as docker generated files
# are usually owned by root
sudo chown "${USER}:" . -R

echo "Deploying site..."

if [[ "${CI_BRANCH}" != "main" ]]; then
    exit 0
fi

if [[ "${CI_PULL_REQUEST}" == "true" ]]; then
    exit 0
fi

base_folder="www/fiji-sis.tc.akvo.org/public_html"

rsync \
    --archive \
    --compress \
    --progress \
    --rsh="ssh -i ${SITES_SSH_KEY} -o BatchMode=yes -p 18765 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no" \
    build/ "u7-nnfq7m4dqfyx@35.214.170.100:/home/u7-nnfq7m4dqfyx/${base_folder}"

remote_exec () {
    ssh -i "${SITES_SSH_KEY}" -o BatchMode=yes \
	-p 18765 \
	-o UserKnownHostsFile=/dev/null \
	-o StrictHostKeyChecking=no \
	u7-nnfq7m4dqfyx@35.214.170.100 "$@"
}

remote_exec \
    "find ${base_folder}/ -not -path '*.well-known*' -type f -print0 | xargs -0 -n1 chmod 644"

remote_exec \
    "find ${base_folder}/ -type d -print0 | xargs -0 -n1 chmod 755"

echo "Done"
