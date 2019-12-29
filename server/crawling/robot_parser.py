class RobotParser:
    def __init__(self):
        self.colon = ':'
        self.allow_urls = []
        self.disallow_urls = []

    def parse(self, robot_content):
        robot_contents = robot_content.split('\n')
        all_agent = False
        for content in robot_contents:
            try:
                key, value = map(str, content.split(self.colon))
                # remove space
                new_value = value.strip()
                if key == 'User-Agent' and new_value == '*':
                    all_agent = True
                    continue

                if all_agent and 'Allow' == key:
                    self.allow_urls.append(new_value)
                elif all_agent and 'Disallow' == key:
                    self.disallow_urls.append(new_value)
                else:
                    all_agent = False
            except ValueError:
                continue

    def get_allow_urls(self):
        return self.allow_urls

    def get_disallow_urls(self):
        return self.disallow_urls
