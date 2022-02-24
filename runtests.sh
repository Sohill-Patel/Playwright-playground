#!/usr/bin/env bash
#npm test
export ip=($(curl -s ifconfig.me))

echo ${ip}

uploadLoc="s3://zego-buildkite-artifacts-eec2ovae/platform/f35815fe-1621-4540-b7aa-88dc2031f859"
echo $uploadLoc
without_scheme=${uploadLoc##s3://}
echo $without_scheme
S3_BUCKET="${without_scheme%%/*}"
echo $S3_BUCKET
  S3_PREFIX="${without_scheme#*/}/test-results/"
echo $S3_PREFIX