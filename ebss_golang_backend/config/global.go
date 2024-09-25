package config

import (
	"github.com/spf13/viper"
	"gorm.io/gorm"
)

type Application struct {
	ConfigViper *viper.Viper
	Config      Configuration
	DB          *gorm.DB
}

var AppGlobal = new(Application)
