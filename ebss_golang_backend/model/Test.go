package model

type Test struct {
	TestId  uint   `json:"test_id" gorm:"primaryKey"`
	Name    string `json:"name" gorm:"not null;comment:名称"`
	AddTime int    `json:"add_time" gorm:"not null;comment:添加时间"`
}

func (Test) TableName() string {
	//实现TableName接口，以达到结构体和表对应，如果不实现该接口，并未设置全局表名禁用复数，gorm会自动扩展表名为articles（结构体+s）
	return "test"
}
