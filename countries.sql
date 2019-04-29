/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : laravel_project1

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2019-04-29 17:16:04
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for countries
-- ----------------------------
DROP TABLE IF EXISTS `countries`;
CREATE TABLE `countries` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `country_code` varchar(2) NOT NULL DEFAULT '',
  `country_name` varchar(100) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=247 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of countries

-- ----------------------------
INSERT INTO `countries` VALUES ('1', 'AF', 'Afghanistan');
INSERT INTO `countries` VALUES ('2', 'AL', 'Albania');
INSERT INTO `countries` VALUES ('3', 'DZ', 'Algeria');
INSERT INTO `countries` VALUES ('4', 'DS', 'American Samoa');
INSERT INTO `countries` VALUES ('5', 'AD', 'Andorra');
INSERT INTO `countries` VALUES ('6', 'AO', 'Angola');
INSERT INTO `countries` VALUES ('7', 'AI', 'Anguilla');
INSERT INTO `countries` VALUES ('8', 'AQ', 'Antarctica');
INSERT INTO `countries` VALUES ('9', 'AG', 'Antigua and Barbuda');
INSERT INTO `countries` VALUES ('10', 'AR', 'Argentina');
INSERT INTO `countries` VALUES ('11', 'AM', 'Armenia');
INSERT INTO `countries` VALUES ('12', 'AW', 'Aruba');
INSERT INTO `countries` VALUES ('13', 'AU', 'Australia');
INSERT INTO `countries` VALUES ('14', 'AT', 'Austria');
INSERT INTO `countries` VALUES ('15', 'AZ', 'Azerbaijan');
INSERT INTO `countries` VALUES ('16', 'BS', 'Bahamas');
INSERT INTO `countries` VALUES ('17', 'BH', 'Bahrain');
INSERT INTO `countries` VALUES ('18', 'BD', 'Bangladesh');
INSERT INTO `countries` VALUES ('19', 'BB', 'Barbados');
INSERT INTO `countries` VALUES ('20', 'BY', 'Belarus');
INSERT INTO `countries` VALUES ('21', 'BE', 'Belgium');
INSERT INTO `countries` VALUES ('22', 'BZ', 'Belize');
INSERT INTO `countries` VALUES ('23', 'BJ', 'Benin');
INSERT INTO `countries` VALUES ('24', 'BM', 'Bermuda');
INSERT INTO `countries` VALUES ('25', 'BT', 'Bhutan');
INSERT INTO `countries` VALUES ('26', 'BO', 'Bolivia');
INSERT INTO `countries` VALUES ('27', 'BA', 'Bosnia and Herzegovina');
INSERT INTO `countries` VALUES ('28', 'BW', 'Botswana');
INSERT INTO `countries` VALUES ('29', 'BV', 'Bouvet Island');
INSERT INTO `countries` VALUES ('30', 'BR', 'Brazil');
INSERT INTO `countries` VALUES ('31', 'IO', 'British Indian Ocean Territory');
INSERT INTO `countries` VALUES ('32', 'BN', 'Brunei Darussalam');
INSERT INTO `countries` VALUES ('33', 'BG', 'Bulgaria');
INSERT INTO `countries` VALUES ('34', 'BF', 'Burkina Faso');
INSERT INTO `countries` VALUES ('35', 'BI', 'Burundi');
INSERT INTO `countries` VALUES ('36', 'KH', 'Cambodia');
INSERT INTO `countries` VALUES ('37', 'CM', 'Cameroon');
INSERT INTO `countries` VALUES ('38', 'CA', 'Canada');
INSERT INTO `countries` VALUES ('39', 'CV', 'Cape Verde');
INSERT INTO `countries` VALUES ('40', 'KY', 'Cayman Islands');
INSERT INTO `countries` VALUES ('41', 'CF', 'Central African Republic');
INSERT INTO `countries` VALUES ('42', 'TD', 'Chad');
INSERT INTO `countries` VALUES ('43', 'CL', 'Chile');
INSERT INTO `countries` VALUES ('44', 'CN', 'China');
INSERT INTO `countries` VALUES ('45', 'CX', 'Christmas Island');
INSERT INTO `countries` VALUES ('46', 'CC', 'Cocos (Keeling) Islands');
INSERT INTO `countries` VALUES ('47', 'CO', 'Colombia');
INSERT INTO `countries` VALUES ('48', 'KM', 'Comoros');
INSERT INTO `countries` VALUES ('49', 'CG', 'Congo');
INSERT INTO `countries` VALUES ('50', 'CK', 'Cook Islands');
INSERT INTO `countries` VALUES ('51', 'CR', 'Costa Rica');
INSERT INTO `countries` VALUES ('52', 'HR', 'Croatia (Hrvatska)');
INSERT INTO `countries` VALUES ('53', 'CU', 'Cuba');
INSERT INTO `countries` VALUES ('54', 'CY', 'Cyprus');
INSERT INTO `countries` VALUES ('55', 'CZ', 'Czech Republic');
INSERT INTO `countries` VALUES ('56', 'DK', 'Denmark');
INSERT INTO `countries` VALUES ('57', 'DJ', 'Djibouti');
INSERT INTO `countries` VALUES ('58', 'DM', 'Dominica');
INSERT INTO `countries` VALUES ('59', 'DO', 'Dominican Republic');
INSERT INTO `countries` VALUES ('60', 'TP', 'East Timor');
INSERT INTO `countries` VALUES ('61', 'EC', 'Ecuador');
INSERT INTO `countries` VALUES ('62', 'EG', 'Egypt');
INSERT INTO `countries` VALUES ('63', 'SV', 'El Salvador');
INSERT INTO `countries` VALUES ('64', 'GQ', 'Equatorial Guinea');
INSERT INTO `countries` VALUES ('65', 'ER', 'Eritrea');
INSERT INTO `countries` VALUES ('66', 'EE', 'Estonia');
INSERT INTO `countries` VALUES ('67', 'ET', 'Ethiopia');
INSERT INTO `countries` VALUES ('68', 'FK', 'Falkland Islands (Malvinas)');
INSERT INTO `countries` VALUES ('69', 'FO', 'Faroe Islands');
INSERT INTO `countries` VALUES ('70', 'FJ', 'Fiji');
INSERT INTO `countries` VALUES ('71', 'FI', 'Finland');
INSERT INTO `countries` VALUES ('72', 'FR', 'France');
INSERT INTO `countries` VALUES ('73', 'FX', 'France, Metropolitan');
INSERT INTO `countries` VALUES ('74', 'GF', 'French Guiana');
INSERT INTO `countries` VALUES ('75', 'PF', 'French Polynesia');
INSERT INTO `countries` VALUES ('76', 'TF', 'French Southern Territories');
INSERT INTO `countries` VALUES ('77', 'GA', 'Gabon');
INSERT INTO `countries` VALUES ('78', 'GM', 'Gambia');
INSERT INTO `countries` VALUES ('79', 'GE', 'Georgia');
INSERT INTO `countries` VALUES ('80', 'DE', 'Germany');
INSERT INTO `countries` VALUES ('81', 'GH', 'Ghana');
INSERT INTO `countries` VALUES ('82', 'GI', 'Gibraltar');
INSERT INTO `countries` VALUES ('83', 'GK', 'Guernsey');
INSERT INTO `countries` VALUES ('84', 'GR', 'Greece');
INSERT INTO `countries` VALUES ('85', 'GL', 'Greenland');
INSERT INTO `countries` VALUES ('86', 'GD', 'Grenada');
INSERT INTO `countries` VALUES ('87', 'GP', 'Guadeloupe');
INSERT INTO `countries` VALUES ('88', 'GU', 'Guam');
INSERT INTO `countries` VALUES ('89', 'GT', 'Guatemala');
INSERT INTO `countries` VALUES ('90', 'GN', 'Guinea');
INSERT INTO `countries` VALUES ('91', 'GW', 'Guinea-Bissau');
INSERT INTO `countries` VALUES ('92', 'GY', 'Guyana');
INSERT INTO `countries` VALUES ('93', 'HT', 'Haiti');
INSERT INTO `countries` VALUES ('94', 'HM', 'Heard and Mc Donald Islands');
INSERT INTO `countries` VALUES ('95', 'HN', 'Honduras');
INSERT INTO `countries` VALUES ('96', 'HK', 'Hong Kong');
INSERT INTO `countries` VALUES ('97', 'HU', 'Hungary');
INSERT INTO `countries` VALUES ('98', 'IS', 'Iceland');
INSERT INTO `countries` VALUES ('99', 'IN', 'India');
INSERT INTO `countries` VALUES ('100', 'IM', 'Isle of Man');
INSERT INTO `countries` VALUES ('101', 'ID', 'Indonesia');
INSERT INTO `countries` VALUES ('102', 'IR', 'Iran (Islamic Republic of)');
INSERT INTO `countries` VALUES ('103', 'IQ', 'Iraq');
INSERT INTO `countries` VALUES ('104', 'IE', 'Ireland');
INSERT INTO `countries` VALUES ('105', 'IL', 'Israel');
INSERT INTO `countries` VALUES ('106', 'IT', 'Italy');
INSERT INTO `countries` VALUES ('107', 'CI', 'Ivory Coast');
INSERT INTO `countries` VALUES ('108', 'JE', 'Jersey');
INSERT INTO `countries` VALUES ('109', 'JM', 'Jamaica');
INSERT INTO `countries` VALUES ('110', 'JP', 'Japan');
INSERT INTO `countries` VALUES ('111', 'JO', 'Jordan');
INSERT INTO `countries` VALUES ('112', 'KZ', 'Kazakhstan');
INSERT INTO `countries` VALUES ('113', 'KE', 'Kenya');
INSERT INTO `countries` VALUES ('114', 'KI', 'Kiribati');
INSERT INTO `countries` VALUES ('115', 'KP', 'Korea, Democratic People\'s Republic of');
INSERT INTO `countries` VALUES ('116', 'KR', 'Korea, Republic of'');
INSERT INTO `countries` VALUES ('117', 'XK', 'Kosovo');
INSERT INTO `countries` VALUES ('118', 'KW', 'Kuwait');
INSERT INTO `countries` VALUES ('119', 'KG', 'Kyrgyzstan');
INSERT INTO `countries` VALUES ('120', 'LA', 'Lao People\'s Democratic Republic');
INSERT INTO `countries` VALUES ('121', 'LV', 'Latvia'');
INSERT INTO `countries` VALUES ('122', 'LB', 'Lebanon');
INSERT INTO `countries` VALUES ('123', 'LS', 'Lesotho');
INSERT INTO `countries` VALUES ('124', 'LR', 'Liberia');
INSERT INTO `countries` VALUES ('125', 'LY', 'Libyan Arab Jamahiriya');
INSERT INTO `countries` VALUES ('126', 'LI', 'Liechtenstein');
INSERT INTO `countries` VALUES ('127', 'LT', 'Lithuania');
INSERT INTO `countries` VALUES ('128', 'LU', 'Luxembourg');
INSERT INTO `countries` VALUES ('129', 'MO', 'Macau');
INSERT INTO `countries` VALUES ('130', 'MK', 'Macedonia');
INSERT INTO `countries` VALUES ('131', 'MG', 'Madagascar');
INSERT INTO `countries` VALUES ('132', 'MW', 'Malawi');
INSERT INTO `countries` VALUES ('133', 'MY', 'Malaysia');
INSERT INTO `countries` VALUES ('134', 'MV', 'Maldives');
INSERT INTO `countries` VALUES ('135', 'ML', 'Mali');
INSERT INTO `countries` VALUES ('136', 'MT', 'Malta');
INSERT INTO `countries` VALUES ('137', 'MH', 'Marshall Islands');
INSERT INTO `countries` VALUES ('138', 'MQ', 'Martinique');
INSERT INTO `countries` VALUES ('139', 'MR', 'Mauritania');
INSERT INTO `countries` VALUES ('140', 'MU', 'Mauritius');
INSERT INTO `countries` VALUES ('141', 'TY', 'Mayotte');
INSERT INTO `countries` VALUES ('142', 'MX', 'Mexico');
INSERT INTO `countries` VALUES ('143', 'FM', 'Micronesia, Federated States of');
INSERT INTO `countries` VALUES ('144', 'MD', 'Moldova, Republic of');
INSERT INTO `countries` VALUES ('145', 'MC', 'Monaco');
INSERT INTO `countries` VALUES ('146', 'MN', 'Mongolia');
INSERT INTO `countries` VALUES ('147', 'ME', 'Montenegro');
INSERT INTO `countries` VALUES ('148', 'MS', 'Montserrat');
INSERT INTO `countries` VALUES ('149', 'MA', 'Morocco');
INSERT INTO `countries` VALUES ('150', 'MZ', 'Mozambique');
INSERT INTO `countries` VALUES ('151', 'MM', 'Myanmar');
INSERT INTO `countries` VALUES ('152', 'NA', 'Namibia');
INSERT INTO `countries` VALUES ('153', 'NR', 'Nauru');
INSERT INTO `countries` VALUES ('154', 'NP', 'Nepal');
INSERT INTO `countries` VALUES ('155', 'NL', 'Netherlands');
INSERT INTO `countries` VALUES ('156', 'AN', 'Netherlands Antilles');
INSERT INTO `countries` VALUES ('157', 'NC', 'New Caledonia');
INSERT INTO `countries` VALUES ('158', 'NZ', 'New Zealand');
INSERT INTO `countries` VALUES ('159', 'NI', 'Nicaragua');
INSERT INTO `countries` VALUES ('160', 'NE', 'Niger');
INSERT INTO `countries` VALUES ('161', 'NG', 'Nigeria');
INSERT INTO `countries` VALUES ('162', 'NU', 'Niue');
INSERT INTO `countries` VALUES ('163', 'NF', 'Norfolk Island');
INSERT INTO `countries` VALUES ('164', 'MP', 'Northern Mariana Islands');
INSERT INTO `countries` VALUES ('165', 'NO', 'Norway');
INSERT INTO `countries` VALUES ('166', 'OM', 'Oman');
INSERT INTO `countries` VALUES ('167', 'PK', 'Pakistan');
INSERT INTO `countries` VALUES ('168', 'PW', 'Palau');
INSERT INTO `countries` VALUES ('169', 'PS', 'Palestine');
INSERT INTO `countries` VALUES ('170', 'PA', 'Panama');
INSERT INTO `countries` VALUES ('171', 'PG', 'Papua New Guinea');
INSERT INTO `countries` VALUES ('172', 'PY', 'Paraguay');
INSERT INTO `countries` VALUES ('173', 'PE', 'Peru');
INSERT INTO `countries` VALUES ('174', 'PH', 'Philippines');
INSERT INTO `countries` VALUES ('175', 'PN', 'Pitcairn');
INSERT INTO `countries` VALUES ('176', 'PL', 'Poland');
INSERT INTO `countries` VALUES ('177', 'PT', 'Portugal');
INSERT INTO `countries` VALUES ('178', 'PR', 'Puerto Rico');
INSERT INTO `countries` VALUES ('179', 'QA', 'Qatar');
INSERT INTO `countries` VALUES ('180', 'RE', 'Reunion');
INSERT INTO `countries` VALUES ('181', 'RO', 'Romania');
INSERT INTO `countries` VALUES ('182', 'RU', 'Russian Federation');
INSERT INTO `countries` VALUES ('183', 'RW', 'Rwanda');
INSERT INTO `countries` VALUES ('184', 'KN', 'Saint Kitts and Nevis');
INSERT INTO `countries` VALUES ('185', 'LC', 'Saint Lucia');
INSERT INTO `countries` VALUES ('186', 'VC', 'Saint Vincent and the Grenadines');
INSERT INTO `countries` VALUES ('187', 'WS', 'Samoa');
INSERT INTO `countries` VALUES ('188', 'SM', 'San Marino');
INSERT INTO `countries` VALUES ('189', 'ST', 'Sao Tome and Principe');
INSERT INTO `countries` VALUES ('190', 'SA', 'Saudi Arabia');
INSERT INTO `countries` VALUES ('191', 'SN', 'Senegal');
INSERT INTO `countries` VALUES ('192', 'RS', 'Serbia');
INSERT INTO `countries` VALUES ('193', 'SC', 'Seychelles');
INSERT INTO `countries` VALUES ('194', 'SL', 'Sierra Leone');
INSERT INTO `countries` VALUES ('195', 'SG', 'Singapore');
INSERT INTO `countries` VALUES ('196', 'SK', 'Slovakia');
INSERT INTO `countries` VALUES ('197', 'SI', 'Slovenia');
INSERT INTO `countries` VALUES ('198', 'SB', 'Solomon Islands');
INSERT INTO `countries` VALUES ('199', 'SO', 'Somalia');
INSERT INTO `countries` VALUES ('200', 'ZA', 'South Africa');
INSERT INTO `countries` VALUES ('201', 'GS', 'South Georgia South Sandwich Islands');
INSERT INTO `countries` VALUES ('202', 'SS', 'South Sudan');
INSERT INTO `countries` VALUES ('203', 'ES', 'Spain');
INSERT INTO `countries` VALUES ('204', 'LK', 'Sri Lanka');
INSERT INTO `countries` VALUES ('205', 'SH', 'St. Helena');
INSERT INTO `countries` VALUES ('206', 'PM', 'St. Pierre and Miquelon');
INSERT INTO `countries` VALUES ('207', 'SD', 'Sudan');
INSERT INTO `countries` VALUES ('208', 'SR', 'Suriname');
INSERT INTO `countries` VALUES ('209', 'SJ', 'Svalbard and Jan Mayen Islands');
INSERT INTO `countries` VALUES ('210', 'SZ', 'Swaziland');
INSERT INTO `countries` VALUES ('211', 'SE', 'Sweden');
INSERT INTO `countries` VALUES ('212', 'CH', 'Switzerland');
INSERT INTO `countries` VALUES ('213', 'SY', 'Syrian Arab Republic');
INSERT INTO `countries` VALUES ('214', 'TW', 'Taiwan');
INSERT INTO `countries` VALUES ('215', 'TJ', 'Tajikistan');
INSERT INTO `countries` VALUES ('216', 'TZ', 'Tanzania, United Republic of');
INSERT INTO `countries` VALUES ('217', 'TH', 'Thailand');
INSERT INTO `countries` VALUES ('218', 'TG', 'Togo');
INSERT INTO `countries` VALUES ('219', 'TK', 'Tokelau');
INSERT INTO `countries` VALUES ('220', 'TO', 'Tonga');
INSERT INTO `countries` VALUES ('221', 'TT', 'Trinidad and Tobago');
INSERT INTO `countries` VALUES ('222', 'TN', 'Tunisia');
INSERT INTO `countries` VALUES ('223', 'TR', 'Turkey');
INSERT INTO `countries` VALUES ('224', 'TM', 'Turkmenistan');
INSERT INTO `countries` VALUES ('225', 'TC', 'Turks and Caicos Islands');
INSERT INTO `countries` VALUES ('226', 'TV', 'Tuvalu');
INSERT INTO `countries` VALUES ('227', 'UG', 'Uganda');
INSERT INTO `countries` VALUES ('228', 'UA', 'Ukraine');
INSERT INTO `countries` VALUES ('229', 'AE', 'United Arab Emirates');
INSERT INTO `countries` VALUES ('230', 'GB', 'United Kingdom');
INSERT INTO `countries` VALUES ('231', 'US', 'United States');
INSERT INTO `countries` VALUES ('232', 'UM', 'United States minor outlying islands');
INSERT INTO `countries` VALUES ('233', 'UY', 'Uruguay');
INSERT INTO `countries` VALUES ('234', 'UZ', 'Uzbekistan');
INSERT INTO `countries` VALUES ('235', 'VU', 'Vanuatu');
INSERT INTO `countries` VALUES ('236', 'VA', 'Vatican City State');
INSERT INTO `countries` VALUES ('237', 'VE', 'Venezuela');
INSERT INTO `countries` VALUES ('238', 'VN', 'Vietnam');
INSERT INTO `countries` VALUES ('239', 'VG', 'Virgin Islands (British)');
INSERT INTO `countries` VALUES ('240', 'VI', 'Virgin Islands (U.S.)');
INSERT INTO `countries` VALUES ('241', 'WF', 'Wallis and Futuna Islands');
INSERT INTO `countries` VALUES ('242', 'EH', 'Western Sahara');
INSERT INTO `countries` VALUES ('243', 'YE', 'Yemen');
INSERT INTO `countries` VALUES ('244', 'ZR', 'Zaire');
INSERT INTO `countries` VALUES ('245', 'ZM', 'Zambia');
INSERT INTO `countries` VALUES ('246', 'ZW', 'Zimbabwe');
