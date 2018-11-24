# coding: shift-jis
#! /usr/bin/env python3

import requests
import lxml.html

def get_lines_in_pref(index):
    url = 'http://ekikara.jp/newdata/state/line/%02d.htm' % index
    response = requests.get(url)
    response.encoding = "SHIFT_JIS"
    root = lxml.html.fromstring(response.text)

    elems = root.cssselect('.rsltSet01')
    line_dict = {}
    for elem in elems:
        line_url_index = elem.cssselect('a')[0].attrib['href'].split('/')[-1].split('.')[0]
        line_name = elem.cssselect('a')[0].text_content()
        line_reading = elem.cssselect('span.m')[0].text_content()
        line_dict[line_url_index] = [line_name, line_reading]

    return line_dict

def get_lines():
    line_dict = {}
    for i in range(47):
        line_dict.update(get_lines_in_pref(i + 1))

    return line_dict


def write_js_file(line_dict):
    f = open('line_data.js', 'w')
    f.write('line_data = [')
    first_flag = True
    for elem in line_dict.items():
        if not first_flag:
            f.write(', ')
        url_index=elem[0]
        line_name=elem[1][0]
        line_reading=elem[1][1]
        line_str = "['%s', '%s', '%s']" % (url_index, line_name, line_reading)
        f.write(line_str)
        first_flag = False
    f.write('];')
    f.close()

def main():
    line_dict = get_lines()
    write_js_file(line_dict)


if __name__ == '__main__':
    main()
