#!/bin/sh
#
# Author:   Eric B Soyke
# Date:     12/15/2017
# Purpose:  This script packages AccessPoint rewrite dist folder (TAR),
#			copies the TAR to demo site,
#           backs up the existing app as a TAR to /tmp,
#			deploys new tar

# Variables
AWS_SERVER=34.216.19.49
AWS_USER=ec2-user
TODAY="$(date +'%Y%m%d')"
TARNAME="AP2_$TODAY.tar"
BACKUP_TARNAME="AP2_backup$TODAY.tar"
# directory where the code to package is (set yours accordingly)
#REPO_LOCATION=/Users/esoyke/development/PSCU/ap2
# This assumes a dist build was created via 'ng build'
REPO_LOCATION=..

# directory where you have the portal.pem file to allow ssh (again, set yours accordingly)
LOCAL_SCP_LOCATION=./deploy

echo Packaging and deploying $TARNAME to $AWS_SERVER as $AWS_USER

# build the tar to deploy
cd $REPO_LOCATION;
tar cvf $TARNAME dist;
mv $TARNAME $LOCAL_SCP_LOCATION;
cd $LOCAL_SCP_LOCATION;

# copy to AWS server
scp -i accesspoint.pem.cer $TARNAME $AWS_USER@$AWS_SERVER:tmp/$TARNAME;

#login to AWS, then execute following commands on remote server:
#create backup tar, move backup to tmp, deploy new tar, remove new tar
ssh -i accesspoint.pem.cer $AWS_USER@$AWS_SERVER "cd ~/website;
tar cvf ~/tmp/$BACKUP_TARNAME ap2; 
cp ~/tmp/$TARNAME .;
tar xvf $TARNAME;
rm $TARNAME;"

echo Have a nice day!

# commands:
# ssh -i accesspoint.pem.cer ec2-user@34.216.19.49
