package model

type ModelCheku struct {
	ChekuId uint   `json:"cheku_id" gorm:"primaryKey"`
	Name    string `json:"name" gorm:"not null;comment:车库名称"`
	Area    string `json:"area" gorm:"not null;index;comment:区域"`
	PjId    string `json:"pj_id" gorm:"not null;default:null;comment:项目ID"`
}
